console.log('hello');

const tabs = document.querySelectorAll('.tabheader__item'),
      tabcontent = document.querySelectorAll('.tabcontent'),
      tabParent = document.querySelector('.tabheader__items');

function HideTabContentDefault() {
    tabcontent.forEach((item) => {
        item.style.display = 'none';
    });

    tabs.forEach((item)=> {
        item.classList.remove('tabheader__item_active');
    });
};

function showTabContent(i = 0){
    tabcontent[i].style.display ='block';
    tabs[i].classList.add('tabheader__item_active');
};

HideTabContentDefault();
showTabContent();

tabParent.addEventListener('click', (event)=>{
    console.log('click');
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i)=>{
            if (target == item) {
                HideTabContentDefault();
                showTabContent(i);
            }
        });
    }
});