let API =
  "https://script.google.com/macros/s/AKfycbxCG90fekKd3afSynvi3JoCdyZG3nku--QWil_XpEQD_fMRjdY7f2ey6uUAgTHnQKdlYA/exec";

        const params = new URLSearchParams(window.location.search);
        const id = params.get("id")
        const singleHeading = document.getElementById("singleHeading");


        async function singleData(){
            let res = await fetch(`${API}?id=${id}`);
            let finalData = await res.json();
            console.log(finalData.data);

            finalData.data.forEach(ele => {
                singleHeading.textContent = ele.productName
            });
        }
        singleData()