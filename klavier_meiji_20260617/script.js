
// load時のアニメーション
window.onload = () => {
    document.body.classList.add('loaded');
};

document.addEventListener('DOMContentLoaded', function () {
    // ====== ▼ モバイルメニュー開閉 ======
    const btn = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav ul');
    const icon = document.querySelector('#menu-icon');

    if (btn) {
        btn.addEventListener('click', function () {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            nav.classList.toggle('open');

            if (!expanded) {
                icon.src = "images/close.jpg";
            } else {
                icon.src = "images/menu.jpg";
            }
        });
    }
});

// 演奏会情報
const concerts = [
    {
        title: "明大祭コンサート",
        date: "2026-10-31",
        caption: "明大祭でLSでコンサートを行います"
    },
    {
        title: "定期演奏会1",
        date: "2026-11-29",
        caption: "とくになし"
    },
    {
      title: "定期演奏会2",
      date: "2026-12-24",
      caption: "とくになし"
    }
];

const upcomingList = document.getElementById("upcoming-list");
const pastList = document.getElementById("past-list");

const today = new Date();
today.setHours(0,0,0,0);

const upcomingConcerts = [];
const pastConcerts = [];
concerts.forEach(c => {
  const d = new Date(c.date);
  if(d >= today){
    upcomingConcerts.push(c);
  }else{
    pastConcerts.push(c);
  }
});

// 並び替え
upcomingConcerts.sort((a,b)=> new Date(a.date)-new Date(b.date));
pastConcerts.sort((a,b)=> new Date(b.date)-new Date(a.date));

// HTML生成関数
function createItem(concert){
  const li = document.createElement("li");

  li.innerHTML = `
    ・<time datetime="${concert.date}">
      ${concert.date.replace(/-/g,"/")}
    </time>：${concert.title}<br>
    <div class="gray">${concert.caption}</div>
  `;

  return li;
}

// 表示
upcomingConcerts.slice(0,3).forEach(c=>{
  upcomingList.appendChild(createItem(c));
});

pastConcerts.slice(0,3).forEach(c=>{
  pastList.appendChild(createItem(c));
});
