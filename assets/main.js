let app = new Vue({
  el: "#app",
  data: {
    text: "",
    editIndex: -1,
    items: ["vue.jsを勉強する！", "カリキュラムを進める", "悪鬼滅殺！"]
  },
  computed: {
    changeButtonText() {
      return this.editIndex === -1 ? "追加" : "編集";
    }
  },
  methods: {
    sendItem() {
      const emptyTodo = "空です！何かやりましょう！";

      if (this.text == "") {
        this.text = emptyTodo;
        return;
      } else if (this.editIndex === -1 && this.text != emptyTodo) {//追加時の処理
        this.items.push(this.text);
      } else if(this.editIndex != -1 && this.text != emptyTodo){//編集時の処理
        this.items.splice(this.editIndex, 1, this.text ); // 第３引数...追加
      }


      // if (this.editIndex === -1 && this.text != "" && this.text != emptyTodo) {
      //   this.items.push(this.text);
      // } else if (this.editIndex === -1 && this.text == "") {
      //   this.text = emptyTodo;
      //   return;
      // } else if(this.editIndex != -1 && this.text != ""){
      //   this.items.splice(this.editIndex, 1, this.text );
      // } else {
      //   this.text = emptyEdit;
      //   return;
      // }
      this.empty();
    },

    empty() {
      this.text = ""; //入力欄を空にする
      this.editIndex = -1; //-1にしリストに追加する
    },

    edit(index) {
      this.editIndex = index;
      this.text = this.items[index];
      this.$refs.editor.focus();
    },

    remove(index) {
      this.items.splice(index, 1);
    }
  }
});
