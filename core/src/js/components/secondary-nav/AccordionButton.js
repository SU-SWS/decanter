import { isSpace, isEnter, isLeftArrow, isRightArrow, isUpArrow, isDownArrow } from "../../utilities/keyboard";

/**
 * [settings description]
 * @type {[type]}
 */
export default class AccordionButton {

  // GO!
  constructor(instance, settings) {
    this.settings = settings;
    this.containers = instance.querySelectorAll(settings.container);

    // Create a clickable button for the triggers.
    this.createTriggers();

    // Capture the newly created triggers.
    this.triggers = instance.querySelectorAll("." + settings.trigger);

    // Add Event Handling to the triggers.
    this.createTriggerEvents();
  }

  /**
   * [createToggles description]
   * @return {[type]} [description]
   */
  createTriggers() {
    this.containers.forEach((container) => {

      // Create unique ids for the trigger and panel of each accordion.
      let id = Math.random().toString(36).substr(2, 9);
      let panel_id = Math.random().toString(36).substr(2, 9);
      let panel = container.querySelector(this.settings.panel);

      container.prepend(this.createTrigger(id, panel_id));
      this.AddPanelAttributes(panel, id, panel_id);
    });
  }

  /**
   * Returns a toggle markup
   * @return {[type]} [description]
   */
  createTrigger(id, panel_id) {
    let element = document.createElement("button");
    let label = document.createTextNode(this.settings.trigger_collapsed_text);

    element.setAttribute('class', this.settings.trigger);
    element.setAttribute('aria-expanded', false);
    element.setAttribute('aria-controls', panel_id);
    element.setAttribute('id', id);
    element.appendChild(label);

    return element;
  }

  /**
   * [createTriggerEvents description]
   * @return {[type]} [description]
   */
  createTriggerEvents() {
    this.triggers.forEach((trigger) => {
      trigger.addEventListener('click', (event) => this.triggerEventClick(event));
      trigger.addEventListener('keydown', (event) => this.triggerEventKeyPress(event));
    });
  }

  /**
   * [triggerEventClick description]
   * @param  {[type]} evnt [description]
   * @return {[type]}      [description]
   */
  triggerEventClick(evnt) {
    let me = evnt.target || evnt.srcElement;
    let panel = document.getElementById(me.getAttribute('aria-controls'));

    if (me.getAttribute('aria-expanded') == "true") {
      this.collapseTrigger(me);
      this.collapsePanel(panel);
    }
    else {
      this.expandPanel(panel);
      this.expandTrigger(me);
    }
  }

  /**
   * [collapseTrigger description]
   * @param  {[type]} me [description]
   * @return {[type]}    [description]
   */
  collapseTrigger(trigger) {
    trigger.setAttribute('aria-expanded', "false");
    trigger.innerText = this.settings.trigger_collapsed_text;
  }

  /**
   * [expandTrigger description]
   * @param  {[type]} me [description]
   * @return {[type]}    [description]
   */
  expandTrigger(trigger) {
    trigger.setAttribute('aria-expanded', "true");
    trigger.innerText = this.settings.trigger_expanded_text;
  }

  /**
   * [togglePanel description]
   * @param  {[type]} panel [description]
   * @return {[type]}       [description]
   */
  togglePanel(panel) {
    if (panel.getAttribute('aria-expanded')) {
      panel.setAttribute('aria-expanded', false);
      panel.setAttribute('aria-hidden', true);
    }
    else {
      panel.setAttribute('aria-expanded', true);
      panel.setAttribute('aria-hidden', false);
    }
  }

  /**
   * [expandPanel description]
   * @param  {[type]} panel [description]
   * @return {[type]}       [description]
   */
  expandPanel(panel) {
    panel.setAttribute('aria-expanded', true);
    panel.setAttribute('aria-hidden', false);
  }

  /**
   * [collapsePanel description]
   * @param  {[type]} panel [description]
   * @return {[type]}       [description]
   */
  collapsePanel(panel) {
    panel.setAttribute('aria-expanded', false);
    panel.setAttribute('aria-hidden', true);
  }

  /**
   * [triggerEventKeyPress description]
   * @param  {[type]} evnt [description]
   * @return {[type]}      [description]
   */
  triggerEventKeyPress(evnt) {
    const theKey = evnt.key || evnt.keyCode;
    let trigger = evnt.target || evnt.srcElement;
    let panel = document.getElementById(trigger.getAttribute('aria-controls'));

    // Toggle on space or enter keys.
    if (
      isSpace(theKey) ||
      isEnter(theKey)
    ) {
      this.triggerEventClick(evnt);
    }

    // Collapse items on left or up arrows.
    if (
      isLeftArrow(theKey) ||
      isUpArrow(theKey)
    ) {
      this.collapseTrigger(trigger);
      this.collapsePanel(panel);
    }

    // Expand items on down or right.
    if (
      isRightArrow(theKey) ||
      isDownArrow(theKey)
    ) {
      this.expandTrigger(trigger);
      this.expandPanel(panel);
    }

  }

  /**
   * [AddPanelAttributes description]
   * @param {[type]} panel      [description]
   * @param {[type]} trigger_id [description]
   * @param {[type]} my_id      [description]
   */
  AddPanelAttributes(panel, trigger_id, my_id) {
    panel.setAttribute('id', my_id);
    panel.setAttribute('aria-expanded', false);
    panel.setAttribute('aria-hidden', true);
    panel.setAttribute('aria-labelledby', trigger_id);
    panel.setAttribute('data-la-initdispnone', true);
  }

}
