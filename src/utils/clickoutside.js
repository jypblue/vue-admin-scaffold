function validate(binding) {
  if (typeof binding.value !== 'function') {
    console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.');
    return false;
  }

  return true;
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements) { return false; }

  for (let i = 0, len = elements.length; i < len; i++) {
    try {
      if (popupItem.contains(elements[i])) {
        return true;
      }
      if (elements[i].contains(popupItem)) {
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  return false;
}

export default {
  bind(el, binding, vNode) {
    if (!validate(binding)) return;

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) return;

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      const elements = e.path || (e.composedPath && e.composedPath());
      elements && elements.length > 0 && elements.unshift(e.target);

      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return;

      el.__vueClickOutside__.callback(e);
    }

    // add Event Listeners
    el.__vueClickOutside__ = {
      handler,
      callback: binding.value,
    };
    document.addEventListener('click', handler);
  },

  update(el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value;
  },

  unbind(el) {
    // Remove Event Listeners
    document.removeEventListener('click', el.__vueClickOutside__.handler);
    delete el.__vueClickOutside__;
  },
};
