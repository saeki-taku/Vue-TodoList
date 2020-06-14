let app = new Vue({
  el: "#app",
  data: {
    text: "",
    editIndex: -1,
    items: ["勉強する！", "買い物に行く", "掃除をする"]
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
      if (this.text) {
        return;//編集中は削除禁止の処理
      }
      this.items.splice(index, 1);
    },
  },
});
