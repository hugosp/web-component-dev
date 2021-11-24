import { defineCustomElement } from 'vue'

import Hello from './components/Hello/Hello.ce.vue'
import Code from './components/Code/Code.ce.vue'


customElements.define('hg-hello', defineCustomElement(Hello));
customElements.define('hg-code', defineCustomElement(Code));



