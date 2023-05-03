import youtube_icon from "../../public/YoutubeLogo.png"
import phone_icon from "../../public/Phone.png"
import instagram_icon from "../../public/InstagramLogo.png"
import mail_icon from "../../public/EnvelopeSimple.png"

function Footer(){
    return (
        <footer>
            <h3>FLORICULTURA AREDNT</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, ducimus deleniti distinctio autem ipsum inventore ipsam incidunt ab labore nobis dolorum deserunt qui optio debitis eligendi?</p>
            <div className="social-media">
                <a href="">
                    <img src={phone_icon} alt="" />
                </a>
                <a href="">
                    <img src={mail_icon} alt="" />
                </a>
                <a href="">
                    <img src={instagram_icon} alt="" />
                </a>
                <a href="">
                    <img src={youtube_icon} alt="" />
                </a>
            </div>

            <div className="credits">
                <small>Feito por <span>Tigas e Sopa</span></small>
            </div>

        </footer>
    )
}

export {Footer}