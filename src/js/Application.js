import EventEmitter from "eventemitter3";
import Beat from "./Beat.js";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this._beat = new Beat();
    this._beat.on(Beat.events.BIT, this._create.bind(this));
    this.lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    // this.count = 0;
    // this.emit(Application.events.READY);
  }

  _create() {
    if (this.count < this.lyrics.length) {
      const message = document.createElement("div");
      message.classList.add("message");
      message.innerText = this.lyrics[this.count];
      document.querySelector(".main").appendChild(message);
      this.count++;
  } else {
      // clearInterval(this._beat);
      // this._beat.off(Beat.events.BIT, this._create);
      this.count = 0;
  }
  }


}
