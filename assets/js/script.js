let vm = new Vue({
  el: "#wrapper",
  data: {
   //assetsBaseURL: ".",
    assetsBaseURL: "https://master.d3loxe9kf7l2m6.amplifyapp.com",
    name: "",
    position: "",
    mobile: "",
    email: "",
    twitter: "",
    linkdin: "",
    
  },
  mounted() {
    new ClipboardJS("#copy-button");
  },
  methods: {
    selectShape(shape, index) {
      this.shapes[this.activeShapeIndex].selected = false;
      this.activeShapeIndex = index;
      shape.selected = true;
    },
  },
});