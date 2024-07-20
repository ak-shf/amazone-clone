let herocard='';
cards.forEach((maincard,index)=>{
    if (index!=cards.length-1) {
        
    
        herocard+=`
                    <div class="hero-card ">
                    <h3 class="card-heading">${maincard.card_heading}</h3>
                    <div class="hero-mini-card-group">
                        <div class="hero-mini-card">
                            <img src="${maincard.card1.card_image}" alt="" class="card-image">
                            <h4 class="card-subheading">${maincard.card1.card_name}</h4>
                        </div>
                        <div class="hero-mini-card">
                            <img src="${maincard.card2.card_image}" alt="" class="card-image">
                            <h4 class="card-subheading">${maincard.card2.card_name}</h4>
                        </div>
                        <div class="hero-mini-card">
                            <img src="${maincard.card3.card_image}" alt="" class="card-image">
                            <h4 class="card-subheading">${maincard.card3.card_name}</h4>
                        </div>
                        <div class="hero-mini-card">
                            <img src="${maincard.card4.card_image}" alt="" class="card-image">
                            <h4 class="card-subheading">${maincard.card4.card_name}</h4>
                        </div>
                       
                    </div>
                    <a href="${maincard.card_link_path}" class="hero-card-link">${maincard.card_link_name}</a>
                </div>`
    }
    else{
        herocard+=`
        <div class="hero-card ">
        <h3 class="card-heading">${maincard.card_heading}</h3>
            <div >
                <img src="${maincard.card_image}" alt="" class="last-card-image">
               
            </div>
           
       
        <a href="${maincard.card_link_path}" class="hero-card-link">${maincard.card_link_name}</a>
    </div>`

    }
    document.querySelector('.js-herocard').innerHTML=herocard;
    
})