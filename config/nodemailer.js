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
                <div style="display: inline-block; width:200px; position: absolute; left:225px; top: 20px;">
                    <p style="font-size: 20px; color:#96BA27;">${e.title}</p>
                    <p style="font-size: 20px; color:#1F1F2B;">${e.description}</p>
                </div>
                <div style="display: inline-block; width: 100px; position: absolute; right:30px; top: 20px; ">
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
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">

        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Best Deal in Town Denver</title>
            <style type="text/css">
                body {
                    margin: 0;
                    padding: 0;
                    min-width: 100%!important;
                }
                
                img {
                    height: auto;
                }
                
                .content {
                    width: 100%;
                    max-width: 600px;
                }
                
                .header {
                    padding: 40px 30px 20px 30px;
                }
                
                .innerpadding {
                    padding: 30px 30px 30px 30px;
                }
                
                .borderbottom {
                    border-bottom: 1px solid #f2eeed;
                }
                
                .subhead {
                    font-size: 15px;
                    color: #ffffff;
                    font-family: sans-serif;
                    letter-spacing: 10px;
                }
                
                .h1,
                .h2,
                .bodycopy {
                    color: #153643;
                    font-family: sans-serif;
                }
                
                .h1 {
                    font-size: 33px;
                    line-height: 38px;
                    font-weight: bold;
                }
                
                .h2 {
                    padding: 0 0 15px 0;
                    font-size: 24px;
                    line-height: 28px;
                    font-weight: bold;
                }
                
                .bodycopy {
                    font-size: 16px;
                    line-height: 22px;
                }
                
                .button {
                    text-align: center;
                    font-size: 18px;
                    font-family: sans-serif;
                    font-weight: bold;
                    padding: 0 30px 0 30px;
                }
                
                .button a {
                    color: #ffffff;
                    text-decoration: none;
                }
                
                .footer {
                    padding: 20px 30px 15px 30px;
                }
                
                .footercopy {
                    font-family: sans-serif;
                    font-size: 14px;
                    color: #ffffff;
                }
                
                .footercopy a {
                    color: #ffffff;
                    text-decoration: underline;
                }
                
                @media only screen and (max-width: 550px),
                screen and (max-device-width: 550px) {
                    body[yahoo] .hide {
                        display: none!important;
                    }
                    body[yahoo] .buttonwrapper {
                        background-color: transparent!important;
                    }
                    body[yahoo] .button {
                        padding: 0px!important;
                    }
                    body[yahoo] .button a {
                        background-color: #e05443;
                        padding: 15px 15px 13px!important;
                    }
                    body[yahoo] .unsubscribe {
                        display: block;
                        margin-top: 20px;
                        padding: 10px 50px;
                        background: #2f3942;
                        border-radius: 5px;
                        text-decoration: none!important;
                        font-weight: bold;
                    }
                }
                /*@media only screen and (min-device-width: 601px) {
            .content {width: 600px !important;}
            .col425 {width: 425px!important;}
            .col380 {width: 380px!important;}
            }*/
            </style>
        </head>

        <body yahoo bgcolor="#f6f8f1">
            <table width="100%" bgcolor="#f6f8f1" border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>
                        <!--[if (gte mso 9)|(IE)]>
            <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                <td>
            <![endif]-->
                        <table bgcolor="#ffffff" class="content" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td bgcolor="transparent" class="header">
                                    <table width="70" align="left" border="0" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td height="70" style="padding: 0 20px 20px 0;">
                                            </td>
                                        </tr>
                                    </table>
                                    <!--[if (gte mso 9)|(IE)]>
                    <table width="425" align="left" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td>
                <![endif]-->
                                    <table class="col425" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 425px;">
                                        <tr>
                                            <td height="70">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">

                                                    <tr>
                                                        <td class="h1" style="padding: 5px 0 0 0;">
                                                            <img src="https://res.cloudinary.com/bestdealintown/image/upload/v1604387339/assets/bdit-logo_qivy1w.png" alt="bdit-logo">
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!--[if (gte mso 9)|(IE)]>
                        </td>
                    </tr>
                </table>
                <![endif]-->
                                </td>
                            </tr>
                            <tr>
                                <td class="innerpadding borderbottom">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td class="h2">
                                                Hello, ${name}!
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="bodycopy">
                                                You have succesfully booked the following items at Best Deal Denver:
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="innerpadding borderbottom">

                                    <!--[if (gte mso 9)|(IE)]>
                    <table width="380" align="left" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td>
                <![endif]-->
                                    <table class="col425" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                                        <tr>
                                            <td>
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td class="bodycopy">
                                                            ${productsDetail}
                                                        </td>
                                                    </tr>

                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!--[if (gte mso 9)|(IE)]>
                        </td>
                    </tr>
                </table>
                <![endif]-->
                                </td>
                            </tr>
                            <tr>
                                <td class="innerpadding borderbottom">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td class="bodycopy">
                                                Please Remember you have from now until 6:45pm of today to pick them up. After that time, we do not guarantee that they will be available.
                                            </td>
                                        </tr>
                                        <tr style="height: 50px;"></tr>
                                        <tr style="padding-bottom: 10px;">
                                            <td class="bodycopy">
                                                Your order is:
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="h2">
                                                ${order}
                                            </td>
                                        </tr>
                                        <tr style="height: 50px;"></tr>
                                        <tr style="padding-bottom: 10px;">
                                            <td class="bodycopy">
                                                Your total is:
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="h2">
                                                $${total}
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="footer" bgcolor="#036">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td align="center" class="footercopy">
                                                Our address: 4371 S Broadway, Englewood, CO 80113

                                                <br/> If you have any questions, please contact us at: (303) 593-0581
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
            </table>
            <![endif]-->
                    </td>
                </tr>
            </table>
        </body>

        </html>
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
                <div style="display: inline-block; width:200px; position: absolute; left:225px; top: 20px;">
                    <p style="font-size: 20px; color:#96BA27;">${e.title}</p>
                    <p style="font-size: 20px; color:#1F1F2B;">${e.description}</p>
                </div>
                <div style="display: inline-block; width: 100px; position: absolute; right:30px; top: 20px; ">
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
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml">

            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>Best Deal in Town Denver</title>
                <style type="text/css">
                    body {
                        margin: 0;
                        padding: 0;
                        min-width: 100%!important;
                    }
                    
                    img {
                        height: auto;
                    }
                    
                    .content {
                        width: 100%;
                        max-width: 600px;
                    }
                    
                    .header {
                        padding: 40px 30px 20px 30px;
                    }
                    
                    .innerpadding {
                        padding: 30px 30px 30px 30px;
                    }
                    
                    .borderbottom {
                        border-bottom: 1px solid #f2eeed;
                    }
                    
                    .subhead {
                        font-size: 15px;
                        color: #ffffff;
                        font-family: sans-serif;
                        letter-spacing: 10px;
                    }
                    
                    .h1,
                    .h2,
                    .bodycopy {
                        color: #153643;
                        font-family: sans-serif;
                    }
                    
                    .h1 {
                        font-size: 33px;
                        line-height: 38px;
                        font-weight: bold;
                    }
                    
                    .h2 {
                        padding: 0 0 15px 0;
                        font-size: 24px;
                        line-height: 28px;
                        font-weight: bold;
                    }
                    
                    .bodycopy {
                        font-size: 16px;
                        line-height: 22px;
                    }
                    
                    .button {
                        text-align: center;
                        font-size: 18px;
                        font-family: sans-serif;
                        font-weight: bold;
                        padding: 0 30px 0 30px;
                    }
                    
                    .button a {
                        color: #ffffff;
                        text-decoration: none;
                    }
                    
                    .footer {
                        padding: 20px 30px 15px 30px;
                    }
                    
                    .footercopy {
                        font-family: sans-serif;
                        font-size: 14px;
                        color: #ffffff;
                    }
                    
                    .footercopy a {
                        color: #ffffff;
                        text-decoration: underline;
                    }
                    
                    @media only screen and (max-width: 550px),
                    screen and (max-device-width: 550px) {
                        body[yahoo] .hide {
                            display: none!important;
                        }
                        body[yahoo] .buttonwrapper {
                            background-color: transparent!important;
                        }
                        body[yahoo] .button {
                            padding: 0px!important;
                        }
                        body[yahoo] .button a {
                            background-color: #e05443;
                            padding: 15px 15px 13px!important;
                        }
                        body[yahoo] .unsubscribe {
                            display: block;
                            margin-top: 20px;
                            padding: 10px 50px;
                            background: #2f3942;
                            border-radius: 5px;
                            text-decoration: none!important;
                            font-weight: bold;
                        }
                    }
                    /*@media only screen and (min-device-width: 601px) {
                .content {width: 600px !important;}
                .col425 {width: 425px!important;}
                .col380 {width: 380px!important;}
                }*/
                </style>
            </head>

            <body yahoo bgcolor="#f6f8f1">
                <table width="100%" bgcolor="#f6f8f1" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                        <td>
                            <!--[if (gte mso 9)|(IE)]>
                <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                    <td>
                <![endif]-->
                            <table bgcolor="#ffffff" class="content" align="center" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td bgcolor="transparent" class="header">
                                        <table width="70" align="left" border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td height="70" style="padding: 0 20px 20px 0;">
                                                </td>
                                            </tr>
                                        </table>
                                        <!--[if (gte mso 9)|(IE)]>
                        <table width="425" align="left" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td>
                    <![endif]-->
                                        <table class="col425" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 425px;">
                                            <tr>
                                                <td height="70">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">

                                                        <tr>
                                                            <td class="h1" style="padding: 5px 0 0 0;">
                                                                <img src="https://res.cloudinary.com/bestdealintown/image/upload/v1604387339/assets/bdit-logo_qivy1w.png" alt="bdit-logo">
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!--[if (gte mso 9)|(IE)]>
                            </td>
                        </tr>
                    </table>
                    <![endif]-->
                                    </td>
                                </tr>
                                <tr>
                                    <td class="innerpadding borderbottom">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td class="h2">
                                                    Hello, ${name}!
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="bodycopy">
                                                    You have succesfully booked the following items at Best Deal Denver:
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="innerpadding borderbottom">

                                        <!--[if (gte mso 9)|(IE)]>
                        <table width="380" align="left" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td>
                    <![endif]-->
                                        <table class="col425" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                                            <tr>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td class="bodycopy">
                                                                ${productsDetail}
                                                            </td>
                                                        </tr>

                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!--[if (gte mso 9)|(IE)]>
                            </td>
                        </tr>
                    </table>
                    <![endif]-->
                                    </td>
                                </tr>
                                <tr>
                                    <td class="innerpadding borderbottom">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td class="bodycopy">
                                                    We will be delivering them on date scheduled . Please be sure to be at your address on that day at that time. Remember you will have to pay once you get your products.
                                                </td>
                                            </tr>
                                            <tr style="height: 50px;"></tr>
                                            <tr style="padding-bottom: 10px;">
                                                <td class="bodycopy">
                                                    Your order is:
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="h2">
                                                    ${order}
                                                </td>
                                            </tr>
                                            <tr style="height: 50px;"></tr>
                                            <tr style="padding-bottom: 10px;">
                                                <td class="bodycopy">
                                                    Your total is:
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="h2">
                                                    $${total}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="footer" bgcolor="#036">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td align="center" class="footercopy">
                                                    Our address: 4371 S Broadway, Englewood, CO 80113

                                                    <br/> If you have any questions, please contact us at: (303) 593-0581
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
                    </td>
                    </tr>
                </table>
                <![endif]-->
                        </td>
                    </tr>
                </table>
            </body>

            </html>
      `

    })
}