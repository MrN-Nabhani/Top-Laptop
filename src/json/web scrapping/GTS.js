const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {	
	
	const data = [];
  const browser = await puppeteer.launch();
	const page = await browser.newPage();
	page.setDefaultNavigationTimeout(0);

	let pageNo = 0;
	while(pageNo++ < 10){

		await page.goto(`https://gts.jo/computers/laptops?page=${pageNo}`);
		
		const links = await page.$$eval(".image_hover a", el => el.map(x => x.getAttribute("href")));
		
		
		let _id = 0;
		for(let link of links){
			await page.goto(link);
			
			const title  = await page.$eval('h1', el => el.innerHTML);
			const price  = await page.$eval('.price-new .tb_integer', el => el.innerHTML);
			const imgURL = await page.$eval('.tb_zoom_box.tb_zoom_mouseover img', el => el.getAttribute("src"));
			const brand  = await page.$eval('.product-info.product-info-brand.product-info-brand-value', el => el.innerText);
			const specs  = await page.$$eval('.panel-body.tb_product_description.tb_text_wrap p', el => el.map(p => p.innerText));
			
			let laptopObject = {_id, title, price: Number(price), imgURL, specs, brand, originalLink: link, source: 'GTS'};
			
			data.push(laptopObject);
			_id += 1;
		}
	}
		
		await browser.close();

	fs.writeFile(
		path.join(__dirname, 'logInfo.json'), JSON.stringify({data}),
		(err) => {
			if(err) 
				throw err;
		}
	);

		
})();


/*
	 [
		{
				id: 1,
				title: 'dsd',
				price: 200,
				imgURL: 'http:/.......',
				specs: ['paragraph1', 'paragraph2'],
				source: '',
				brand: '',


			
			
		}
	]
*/