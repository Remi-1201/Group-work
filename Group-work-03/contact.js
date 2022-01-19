$(function() {
    $('table').find('td input').on('click', function(){
        let $this = $(this);
        $this.closest('table').find('td input ').css('background-color', 'transparent');
        $this.css('background-color', 'lightgray'); 
    });
  });
$(function(){
    $('form').submit(function() { 
    alert('送信完了！');    
    });
});