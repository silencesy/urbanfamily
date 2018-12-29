$(function(){
    $('.icon-all, .icon-collents, .icon-like, .icon-dislike').on('click', function() {
        var type = this.dataset.type;
        switch(type) {
            case 'icon-all': {
                $('.icon-all').addClass('actveListing');
                $('.icon-collents, .icon-like, .icon-dislike').removeClass('actveListing');
                $('.listHeart, .listLike, .listHeartLike, .listNotLike').css('display', 'block');
                  break;
            }
            case 'icon-collents': {
                $('.icon-collents').addClass('actveListing');
                $('.icon-all, .icon-like, .icon-dislike').removeClass('actveListing');
                $('.listHeart, .listHeartLike').css('display', 'block');
                $('.listLike, .listNotLike').css('display', 'none');
                break;
            }
            case 'icon-like': {
                $('.icon-like').addClass('actveListing');
                $('.icon-all, .icon-collents, .icon-dislike').removeClass('actveListing');
                $('.listLike, .listHeartLike').css('display', 'block');
                $('.listHeart, .listNotLike').css('display', 'none');
                break;
            }
            case 'icon-dislike': {
                $('.icon-dislike').addClass('actveListing');
                $('.icon-all, .icon-collents, .icon-like').removeClass('actveListing');
                $('.listNotLike').css('display', 'block');
                $('.listHeart, .listLike, .listHeartLike').css('display', 'none');
                break;
            }
        }
    })
  

});