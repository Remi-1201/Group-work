// DOMの読み込みが終わったらfunction()の中の処理を実行します。
$(document).ready(function () {

    // 「国語、英語、数学、理科、社会」の点数（入力値）を取得して合計点と平均点を出すロジック
    
    function score_indicate() {

      // 変数「subject_points」に「国語、英語、数学、理科、社会」の点数の配列を代入します。
      let subject_points = [Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val())
      ];
      return subject_points; };

      function score_sum() {
        let subject_points = score_indicate();
        let sum = subject_points.reduce(function(result, point) {return result + point});
        return sum;
      };
  

      // 平均点数を取得し、取得した平均点数から「A、B、C、D」にランク分けするロジックを記述する。
    function get_achievement() {
      let averageIndicate = $("#average_indicate").text();

      console.log(averageIndicate)

      if (averageIndicate>=80){
        return "A";
      }else if(averageIndicate>=60){
        return "B";
      }else if(averageIndicate>=40){
        return "C";
      }else{
        return "D";
      }
      };
        
    // 各教科の点数を取得し、取得した点数から「合格、不合格」の判断を下すロジックを作ります。
    function get_pass_or_failure(){
      let subject_points=[Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val())];
      
        // 変数「number」に入力した教科の数を代入します。
      let number = subject_points.length;
        // 変数「judge」に"合格"を代入しておきます。
      let judge = "合格";
        // 入力したそれぞれの教科のうち、1つでも60点よりも低い点数があった場合、変数「judge」に"不合格"を再代入する処理を記述する。
        for(let i=0;i<number;i++){
          if (subject_points[i]<60){
            judge = "不合格";
            break;        
         }
        } 
            return judge;         
    };
        // ヒント：配列の繰り返し処理について調べてみましょう。    

    // 最終的なジャッジのロジックを作ります。
    function judgement() {

      // 変数「achievement」に「get_achievement()の戻り値」を代入します。
      let achievement = get_achievement();

      // 変数「pass_or_failure」に「get_pass_or_failure()の戻り値」を代入します。
      let pass_or_failure = get_pass_or_failure();

      // 「最終ジャッジ」(id="alert-indicate)ボタンを押したら「あなたの成績は${achievement}です。${pass_or_failure}です。」が出力される処理です。
      $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です。</label>`);
    };

    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]のいずれかの点数が変更された際に「function score_indicate()」を発火させる処理です。
    $('#national_language, #english, #mathematics, #science, #society').change(function () {
      score_indicate();
    });

    // 「ランク」(id="evaluation")ボタンを押したら「get_achievement()」が出力される処理です。
    $('#btn-evaluation').click(function () {
      $("#evaluation").text(get_achievement());
    });

    // 「判定」(id="btn-judge")ボタンを押したら「function et_pass_or_failure()」が出力される処理です。
    $('#btn-judge').click(function () {
      $("#judge").text(get_pass_or_failure());
    });

    // 「最終ジャッジ」(id="btn-declaration")ボタンが押された際、「function judgement()」の処理を実行させる。
    // ２回目以降に「最終ジャッジ」ボタンを押した際は、それまでに表示していたジャッジのHTML要素を削除して、新たなジャッジのHTML要素を追加する。
    // ヒント：removeメソッドについて調べてみましょう。
    $('#btn-declaration').click(function () {
      $('#declaration').empty();
      $('#declaration').text(judgement());
      });
  });