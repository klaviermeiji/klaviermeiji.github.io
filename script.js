
// load時のアニメーション
window.onload = () => {
    document.body.classList.add('loaded');
};

document.addEventListener('DOMContentLoaded', function () {

    // ====== ▼ モバイルメニュー開閉 ======
    const btn = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav ul');

    if (btn) {
        btn.addEventListener('click', function () {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            nav.classList.toggle('open');
        });
    }
});


