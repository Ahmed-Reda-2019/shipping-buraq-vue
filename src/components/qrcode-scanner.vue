<template>
  <h3 class="fw-bolder text-white text-center my-3" v-if="label != '' ">
    {{label}}
  </h3>
  <div id="qr-code-full-region"></div>
</template>

<script>
import {Html5QrcodeScanner} from "html5-qrcode";

export default {
  name: "qrcode-scanner",
  data() {
    return {
      html5QrcodeScanner: null,
      lastScan: null,
      audio: new Audio("/media/scanner-beep-sound.mp3"),
      inScan:false
    };
  },
  props: {
    qrbox: {
      type: Number,
      default: 250,
    },
    label: {
      type: String,
      default: "",
    },
    fps: {
      type: Number,
      default: 10,
    },
  },
  mounted() {
    const config = {
      fps: this.fps,
      qrbox: this.qrbox,
    };
    this.html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-code-full-region",
        config
    );
    this.html5QrcodeScanner.render(this.onScanSuccess);
  },
  methods: {
    async  onScanSuccess(decodedText, decodedResult) {
      if (decodedText == this.lastScan || this.inScan) {
        return;
      }
      this.inScan = true;
      this.lastScan = decodedText;
      this.audio.play();
      this.$emit("result", decodedText, decodedResult);

      this.html5QrcodeScanner.pause(true);
      await this.delay(500);
      this.html5QrcodeScanner.resume();
      this.inScan = false;

    },
    delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
  },
};
</script>
<style>
#qr-code-full-region{
  padding: 10px;
  border: 1px solid silver;
  background: var(--el-color-white);
  border-radius: 7px;
}
#qr-code-full-region div button{
  background: #db9847;
  color: #FFFFFF;
  border-color: #db9847;
  padding: 0.5rem;
  border-radius: 10px;
}
</style>
