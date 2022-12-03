fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=2110044")
    .then((response) =>response.json())
    .then(
        function(json) {
          console.log(json);
          let answerHtml="";
          json.results.forEach(function(result) {
            answerHtml +='<li>${result.address1}${result.address2}${result.address3}</li>';
          });
          document.querySelector('#answer').innerHTML=answerHtml;
        }
    );