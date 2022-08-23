/* <span v-access="testData">test</span>
testData: {
  access: ['superUser'],
  anyAccess: ['admin']
} */

export default {
    mounted: (el, binding) => {
        const paramObj = binding.value;
        const totalAccess = ['super1Admin'];
        const { access = [], anyAccess = [] } = paramObj;
        let flag = false;
        if (access.length && anyAccess.length) {
            flag = access.every(e => totalAccess.includes(e)) && anyAccess.some(e => totalAccess.includes(e));
        } else if (access.length) {
            flag = access.every(e => totalAccess.includes(e));
        } else if (anyAccess.length) {
            flag = anyAccess.some(e => totalAccess.includes(e));
        }
        if (!flag) {
            el.setAttribute('style', 'display: none !important');
        }
    },
    updated: (el, binding) => {
        const paramObj = binding.value;
        const totalAccess = ['super1Admin'];
        const { access = [], anyAccess = [] } = paramObj;
        let flag = false;
        if (access.length && anyAccess.length) {
            flag = access.every(e => totalAccess.includes(e)) && anyAccess.some(e => totalAccess.includes(e));
        } else if (access.length) {
            flag = access.every(e => totalAccess.includes(e));
        } else if (anyAccess.length) {
            flag = anyAccess.some(e => totalAccess.includes(e));
        }
        if (!flag) {
            el.setAttribute('style', 'display: none !important');
        }
    }
}
