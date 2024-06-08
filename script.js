document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'goldapi-ctgacislx5wzs93-io'; // کلید API خود را جایگزین کنید
    const apiUrl = `https://www.goldapi.io/api/XAU/USD`;
    const api1='goldapi-ctgacislx5wzs93-io';
    const url1=`https://www.goldapi.io/api/XAU/USD`;

    async function fetchGoldPrice() {
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'x-access-token': apiKey,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            const goldPrice = parseFloat(data.price);
            const ask=parseFloat(data.ask)
            const bid=parseFloat(data.bid)
            const gold999=(goldPrice/31.1035)*0.999
            const ask999=(ask/31.1035)*0.999
            const bid999=(bid/31.1035)*0.999
            const gold995=(goldPrice/31.1035)*0.995
            const ask995=(ask/31.1035)*0.995
            const bid995=(bid/31.1035)*0.995
            const goldtt=(goldPrice*0.999)*116.64
            const asktt=(ask*0.999)*116.64
            const bidtt=(bid*0.999)*116.64

            document.getElementById('gold-price').innerHTML = `<p> ${goldPrice} </p>`;
            document.getElementById('ask').innerHTML = `<p>  ${ask} </p>`;
            document.getElementById('bid').innerHTML = `<p>  ${bid} </p>`;
            document.getElementById('spot999').innerHTML = `<p> ${gold999} </p>`;
            document.getElementById('ask999').innerHTML = `<p>  ${ask999} </p>`;
            document.getElementById('bid999').innerHTML = `<p>  ${bid999} </p>`;
            document.getElementById('spot995').innerHTML = `<p> ${gold995} </p>`;
            document.getElementById('ask995').innerHTML = `<p>  ${ask995} </p>`;
            document.getElementById('bid995').innerHTML = `<p>  ${bid995} </p>`;
            document.getElementById('spottt').innerHTML = `<p> ${goldtt} </p>`;
            document.getElementById('asktt').innerHTML = `<p>  ${asktt} </p>`;
            document.getElementById('bidtt').innerHTML = `<p>  ${bidtt} </p>`;
        } catch (error) {
            document.getElementById('gold-price').innerHTML = `<p>خطا در دریافت قیمت</p>`;
        }
    }

    // Fetch the gold price initially
    fetchGoldPrice();

    // Set an interval to fetch the gold price every 5 minutes (300000 milliseconds)
    
});
