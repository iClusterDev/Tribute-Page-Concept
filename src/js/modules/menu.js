const Menu = {
  menu: null,
  items: null,
  active: false,
  trigger: null,

  init: function(menuElement = null, triggerElement = null) {
    if (menuElement) {
      this.menu = menuElement;
      this.items = Array.from(this.menu.children);
      this.items.forEach(item => {
        item.addEventListener("click", () => {
          if (this.active) {
            this.active = !this.active;
            this.close();
          } else {
            this.active = !this.active;
            this.open();
          }
        });
      });
    }

    if (triggerElement) {
      this.trigger = triggerElement;
      this.trigger.addEventListener("click", () => {
        if (this.active) {
          this.active = !this.active;
          this.close();
        } else {
          this.active = !this.active;
          this.open();
        }
      });
    }
  },

  open: function() {
    this.toggle("close", "open");
  },

  close: function() {
    this.toggle("open", "close");
  },

  toggle: function(currentClass, newClass) {
    if (this.menu) {
      this.menu.classList.remove(currentClass);
      this.menu.classList.add(newClass);
    }
  }
};

export default Menu;
