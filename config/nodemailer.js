require('dotenv').config()

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: process.env.SGUSER,
        pass: process.env.SGPASSWORD
    }
})

exports.sendEmail = (email, name, products, order, total) => {

    let productsDetail = ''
    products.map((e, i) => {
        productsDetail += `
            <div style="width:100%; margin-bottom: 50px; border-radius: 8px; height: 175px; border:1px solid #888888; display: inline-block; position: relative ">
                <div style="display: inline-block; width:161px; position:absolute; left:12px; margin-top:38px; margin-left: 12px;">
                    <img src="${e.img}" style="width: 161px; height: 94px;" />
                </div>
                <div style="display: inline-block; width:200px; position: absolute; left:215px; top: 20px;">
                    <p style="font-size: 20px; color:#96BA27;">${e.title}</p>
                    <p style="font-size: 20px; color:#1F1F2B;">${e.description}</p>
                </div>
                <div style="display: inline-block; width: 100px; position: absolute; right:37px; top: 27px; ">
                    <p style="font-size: 20px; font-weight: 700; color:#036;">$ ${e.price}</p>
                    <p style="font-size: 20px; font-weight: 700; color:#036;">$ ${e.discount ? e.discount : '0'} OFF</p>
                </div>
            </div>
        
        `
    })

    return transporter.sendMail({
        from: '"Best Deal Denver" <contact@bestdealdenver.com>',
        to: [email, 'bestdealdenver@gmail.com', 'best.deal.in.denver@gmail.com'],
        subject: 'Thank you for your deal',
        html: `
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Reservation</title>
        <style>
            .main {
                position: absolute;
                padding-left: 15%;
                width: 100%;
                padding-top: 40px;
                padding-bottom: 40px;
            }
            
            .secondary {
                width: 700px;
            }
            
            .title1 {
                font-weight: bold;
                color: #000;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 22px;
            }
            
            .subtitle1 {
                color: #707070;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px
            }
            
            .content1 {
                margin-left: 120px;
                margin-top: -5px
            }
            
            .content2 {
                font-family: Arial, Helvetica, sans-serif;
                text-align: center;
                width: 230px;
                margin-left: 100px;
            }
        </style>
    </head>
    
    <body>
        <div class="main">
            <img src="https://res.cloudinary.com/bestdealintown/image/upload/v1601009885/assets/bdit_ypgner.png" />
            <div class="secondary">
                <p class="title1">Hello, ${name}!</p>
                <p class="subtitle1">
                You have succesfully booked the following items at Best Deal Denver: 
                </p>
                <br>
                <br>
                ${productsDetail}
                <br>
                <br>
                <p class="subtitle1">
                Please remember that you have just 2 hours to pick up your products starting now. After that time, we do not guarantee that they will be available.
                </p>
                <p class="subtitle1">
                Your order is:
                </p>
                <p class="title1">${order}</p>
                <p class="subtitle1">
                Your total is:
                </p>
                <p class="title1">
                $ ${total}
                </p>
                <p class="subtitle1">
                Our address: 4371 S Broadway, Englewood, CO 8011
                </p>
                <hr style="width:100%">
                <p class="subtitle1">
                If you have any questions, please contact us at: +1 303-593-0581
                </p>
            </div>
        </div>
    
    </body>
      `

    })
}

exports.deliveryEmail = (email, name, products, order, total) => {

    let productsDetail = ''
    products.map((e, i) => {
        productsDetail += `
            <div style="width:100%; margin-bottom: 50px; border-radius: 8px; height: 175px; border:1px solid #888888; display: inline-block; position: relative ">
                <div style="display: inline-block; width:161px; position:absolute; left:12px; margin-top:38px; margin-left: 12px;">
                    <img src="${e.img}" style="width: 161px; height: 94px;" />
                </div>
                <div style="display: inline-block; width:200px; position: absolute; left:215px; top: 20px;">
                    <p style="font-size: 20px; color:#96BA27;">${e.title}</p>
                    <p style="font-size: 20px; color:#1F1F2B;">${e.description}</p>
                </div>
                <div style="display: inline-block; width: 100px; position: absolute; right:37px; top: 27px; ">
                    <p style="font-size: 20px; font-weight: 700; color:#036;">$ ${e.price}</p>
                    <p style="font-size: 20px; font-weight: 700; color:#036;">$ ${e.discount ? e.discount : '0'} OFF</p>
                </div>
            </div>
        
        `
    })

    return transporter.sendMail({
        from: '"Best Deal Denver" <contact@bestdealdenver.com>',
        to: [email, 'bestdealdenver@gmail.com', 'best.deal.in.denver@gmail.com'],
        subject: 'Thank you for your deal',
        html: `
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Reservation</title>
        <style>
            .main {
                position: absolute;
                padding-left: 15%;
                width: 100%;
                padding-top: 40px;
                padding-bottom: 40px;
            }
            
            .secondary {
                width: 700px;
            }
            
            .title1 {
                font-weight: bold;
                color: #000;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 22px;
            }
            
            .subtitle1 {
                color: #707070;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px
            }
            
            .content1 {
                margin-left: 120px;
                margin-top: -5px
            }
            
            .content2 {
                font-family: Arial, Helvetica, sans-serif;
                text-align: center;
                width: 230px;
                margin-left: 100px;
            }
        </style>
    </head>
    
    <body>
        <div class="main">
            <img src="https://res.cloudinary.com/bestdealintown/image/upload/v1601009885/assets/bdit_ypgner.png" />
            <div class="secondary">
                <p class="title1">Hello, ${name}!</p>
                <p class="subtitle1">
                You have succesfully booked the following items at Best Deal Denver: 
                </p>
                <br>
                <br>
                ${productsDetail}
                <br>
                <br>
                <p class="subtitle1">
                We will be delivering them on date scheduled . Please be sure to be at your address on that day at that time. Remember you will have to pay once you get your products.
                </p>
                <p class="subtitle1">
                Your order is:
                </p>
                <p class="title1">${order}</p>
                <p class="subtitle1">
                Your total is:
                </p>
                <p class="title1">
                $ ${total}
                </p>
                <p class="subtitle1">
                Our address: 4371 S Broadway, Englewood, CO 8011
                </p>
                <hr style="width:100%">
                <p class="subtitle1">
                If you have any questions, please contact us at: +1 303-593-0581
                </p>
            </div>
        </div>
    
    </body>
      `

    })
}