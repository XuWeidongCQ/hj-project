
import Vue from 'vue'
import ToastrComp from "./ToastrComp";

export const XuToastr = function(content,callback) {
  const constructor = Vue.extend(ToastrComp);
  let inst = new constructor({
    el:document.createElement('div'),
    data(){
      return {
        content:content
      }
    },
    methods:{
      confirm:function () {
        callback()
      }
    }
  });
  document.body.appendChild(inst.$el);
};

