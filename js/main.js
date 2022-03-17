let x = true

function searchHundler()
{
    const elm = document.querySelector('#search-input')
    if (x === true) {
        elm.style.width = '300px'
        x = false
    } else {
        elm.style.width = '100px'
        x = true
    }
}

function hidddenList()
{
    const Hiddden_List = document.querySelector('.side-list-wrapper')
    const btn = document.querySelector('.sideList')

    let x = true
    
    btn.addEventListener('click', function()
    {
        if (x === true) {
            Hiddden_List.style.height = '300px'
            x = false
        } else {
            Hiddden_List.style.height = '0px'
            x = true
        }
    })
}
hidddenList()


function fav()
{
    const btn = document.querySelector('#bFav') 
    btn.addEventListener('click', function () {
        const target = this.parentElement.parentElement.children[0].children;
        target[0].style.color = 'crimson'
    })
} 
fav()

function fav2()
{
    const btn = document.querySelector('#favHeart') 
    btn.addEventListener('click',
    function () {
        this.style.color = '#333'
    })
} 
fav2()
 



