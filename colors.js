var aTags = {
    setColor: function(color){
        //     var aTags = document.querySelectorAll('a');
        //     for(i=0;i<aTags.length;i++){
        //         aTags[i].style.color = color;
        //     }
        $('a').css('color', color);
    }
}
var list = {
    setMarkers: function(color){
        // for(i=0;i<document.querySelectorAll('#li').length;i++){
        //     document.querySelectorAll('#li')[i].style.setProperty('color', color);
        // } 
        $('[id=li]').css('color', color);    
    }
}
var body = {
    setBgColor: function(color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    },
    setArticle: function(color){
        // document.querySelector('#article').style.color = color;
        $('#article').css('color', color);
    }
}
function toggle(self){
    if(self.value === 'day'){
        body.setBgColor('white');
        body.setArticle('black');
        list.setMarkers('black');
        aTags.setColor('blue');
        self.value = 'night';
    } else {
        body.setBgColor('black');
        body.setArticle('white');
        list.setMarkers('white');
        aTags.setColor('gold');
        self.value = 'day';
    }
}