var inYan = document.querySelector('.in'),
    bg    = document.querySelector('.animals-menu'),
    dog = document.querySelector('#dog'),
    hd  = document.getElementsByClassName('h1')[0],
    hc  = document.getElementsByClassName('h1')[1],
    cat = document.querySelector('#cat');
    


dog.addEventListener('click', function() {
    var bell = document.querySelector('.bell'),
        eye1 = document.querySelector('.eye1'),
        eye2 = document.querySelector('.eye2'),
        con = document.querySelector('.dog-container'),
        mmm1  = document.querySelectorAll('.mmm')[1],
        mmm2  = document.querySelectorAll('.mmm')[0];
    hc.style.opacity = '1';
    cat.style.display = 'none';
    inYan.classList.add('in-yan');
    dog.classList.add('dog-in-yan');
    bell.classList.add('bell-in-yan');
    eye1.classList.add('eye1-in-yan');
    eye1.classList.remove('eye1');
    eye2.classList.add('eye2-in-yan');
    eye2.classList.remove('eye2');
    mmm1.classList.add('mmm-in-yan');
    mmm1.classList.remove('mmm');
    mmm2.classList.add('mmm-in-yan');
    mmm2.classList.remove('mmm');
    con.classList.add('dog-container-in-yan');
});

cat.addEventListener('click', function () {
    var bell = document.querySelector('.cat-hand'),
    eye1 = document.querySelector('.cat-eye1'),
    eye2 = document.querySelector('.cat-eye2'),
    mmm1  = document.querySelectorAll('.cat-mmm')[1],
    mmm2  = document.querySelectorAll('.cat-mmm')[0];
    hd.style.opacity = '1';
    dog.style.display = 'none';
    inYan.classList.add('in-yan');
    cat.classList.add('cat-in-yan');
    cat.classList.remove('cat');
    bell.classList.add('cat-hand-in-yan');
    eye1.classList.add('cat-eye1-in-yan');
    eye1.classList.remove('cat-eye1');
    eye2.classList.add('cat-eye2-in-yan');
    eye2.classList.remove('cat-eye2');
    mmm1.classList.add('cat-mmm-in-yan');
    mmm1.classList.remove('cat-mmm');
    mmm2.classList.add('cat-mmm-in-yan');
    mmm2.classList.remove('cat-mmm');
})