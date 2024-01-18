<template>
  <button class="chat-open-dialog"><span class="fa fa-headset text-white fs-2hx"></span></button>
  <button class="chat-button-destroy">
    <span class="fa fa-times"></span>
  </button>

  <div class="chat-popup">
    <disscussion></disscussion>
  </div>
</template>

<script>
import Disscussion from "@/views/site/index/disscussion";
import { scrollToBottom } from "@/core/helpers/dom";

const $ = require("jquery");
export default {
  name: "chat",
  components: { Disscussion },
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    $(".chat-open-dialog").click(function () {
      $(this).toggleClass("active");
      $(".chat-popup").toggleClass("active");
      $(".chat-button-destroy").toggleClass("active");
      scrollToBottom("chat_messages");
    });

    $(".chat-button-start").click(function () {
      $(this).toggleClass("active");
      $(".chat-popup").toggleClass("chat-init");
    });

    $(".chat-button-destroy").click(function () {
      $(".chat-popup").removeClass("active");
      $(".chat-open-dialog").removeClass("active");
      $(this).removeClass("active");
    });
  },
};
</script>

<style>
.chat-button-destroy:focus,
.chat-open-dialog:focus {
  outline: none;
}

.chat-button-destroy span.fa-times:before {
  font-size: 24px;
  color: white;
  text-align: center;
  margin: 10px 0;
  display: block;
}

.chat-open-dialog span.fa-question:before {
  background: white;
  color: var(--bs-primary);
  font-size: 24px;
  display: block;
  padding: 4px 8px;
  border-radius: 6px;
  opacity: 1;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  -ms-transition: all ease 0.5s;
  -o-transition: all ease 0.5s;
  transition: all ease 0.5s;
}

button.chat-open-dialog.active {
  transform: rotate(90deg);
  opacity: 0;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  -ms-transition: all ease 0.5s;
  -o-transition: all ease 0.5s;
  transition: all ease 0.5s;
}

button.chat-button-destroy.active {
  opacity: 1 !important;
  z-index: 2147483000 !important;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  -ms-transition: all ease 0.5s;
  -o-transition: all ease 0.5s;
  transition: all ease 0.5s;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06), 0 2px 32px rgba(0, 0, 0, 0.16);
  background: var(--bs-primary);
  background-size: 14px;
  display: block;
  transform: rotate(180deg);
}
.chat-popup.active {
  opacity: 1 !important;
  z-index: 999;
  height: calc(100% - 95px - 20px) !important;
  max-height: 585px;
  -webkit-box-shadow: 0 5px 40px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 5px 40px rgba(0, 0, 0, 0.16);
  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  -ms-transition: all ease 0.5s;
  -o-transition: all ease 0.5s;
  transition: all ease 0.5s !important;
}
.chat-popup.chat-init .chat-windows {
  transform: translateX(-370px);
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  -ms-transition: all ease 0.5s;
  -o-transition: all ease 0.5s;
  transition: all ease 0.5s;
}
.chat-popup .chat-windows {
  width: 200%;
  height: 100%;
}
.chat-popup .chat-windows .chat-window-one,
.chat-popup .chat-windows .chat-window-two {
  width: 50%;
  height: 100%;
}
.chat-popup .chat-header {
  background: var(--bs-primary);
  border-radius: 8px 8px 0 0;
  padding: 35px 0;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  -ms-transition: all ease 0.5s;
  -o-transition: all ease 0.5s;
  transition: all ease 0.5s;
}
.chat-popup .chat-header h4 {
  color: white;
  text-align: center;
  font-weight: 600;
  margin: 0;
  padding: 0 0 10px;
}
.chat-popup .chat-header .chat-button-start {
  background: white;
  -webkit-border-radius: 150px;
  -moz-border-radius: 150px;
  border-radius: 150px;
  padding: 15px 25px;
  display: block;
  margin: 0 auto;
  font-size: 14px;
  border: none;
}
.chat-popup .chat-header .chat-button-start span {
  padding-left: 5px;
  font-family: "Proxima Nova", "Montserrat", arial, sans-serif;
}
.chat-popup .chat-phone-number {
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 15px 0;
  background: var(--bs-primary2);
  color: white;
}
.chat-popup .chat-phone-number small {
  text-align: center;
  display: block;
  font-size: 13px;
  opacity: 0.7;
  letter-spacing: normal;
  line-height: normal;
  padding: 0 0 10px;
}
.chat-popup div#chatContainer {
  height: 100%;
  /* min-height: 400px; */
}
.chat-popup form {
  margin: 15px 0 5px;
}
.chat-popup form.webchat-config {
  width: 100%;
}
.chat-popup form.webchat-config input {
  margin: 0 auto 10px;
  padding: 8px 10px;
  display: block;
  width: 70%;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  border: none;
}
.chat-popup form.webchat-config .danger input {
  border-right: 5px solid var(--bs-danger);
}
.chat-popup form.webchat-config .danger input::placeholder {
  color: var(--bs-danger);
}
form#chatForm button.chat-button.inactive-chat.active,
form#chatForm button.chat-button {
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  -ms-transition: all ease 0.5s;
  -o-transition: all ease 0.5s;
  transition: all ease 0.5s;
}
form#chatForm button.chat-button.inactive-chat.active {
  transform: rotate(90deg);
  background-size: 0;
}
@media (max-width: 450px) {
  .chat-popup {
    right: 0;
    top: 0;
    max-height: fit-content !important;
    width: 100% !important;
  }
  .chat-popup.active {
    height: 100vh !important;
  }
  .chat-popup {
    right: 0 !important;
  }
  #chatContainer .card-body.min-h-450px {
    min-height: 83vh !important;
  }
  .chat-popup #chat_messages.mh-450px {
    max-height: 83vh !important;
  }
  #chatContainer .card-footer {
    position: fixed;
    bottom: 5px;
    left: 0;
    width: 100%;
  }
}
</style>
