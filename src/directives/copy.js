import { Toast } from 'vant';
const vCopy = {
  bind (el, { value }) {
    el.$value = value;
    el.handel = () => {
      if (!el.$value) {
        Toast('无复制内容');
        return;
      }
      const textarea = document.createElement('textarea');
      textarea.readOnly = 'readonly';
      textarea.style.position = 'absolute';
      textarea.style.left = '-99999x';
      textarea.value = el.$value;
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      const result = document.execCommand('Copy');
      if (result) {
        Toast('复制成功');
      }
      document.body.removeChild(textarea);
    };
    el.addEventListener('click', el.handel);
  },
  componentUpdated (el, { value }) {
    el.$value = value;
  },
  unbind (el) {
    el.removeEventListener('click', el.handel);
  }
};

export default vCopy;
