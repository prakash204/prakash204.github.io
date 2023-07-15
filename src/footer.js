import { LinkedinFilled, InstagramFilled, MailFilled, GithubFilled } from '@ant-design/icons';

export default function Footer() {
    return (
        <div className="footer">
            <p>This is the end of this website, bye !!!</p>
            <div className='icon-box'>
                <a href='https://www.instagram.com/_shashi_prakash_/' style={{textDecoration:"none"}}><InstagramFilled className="Icons"/></a>
                <a href='https://www.linkedin.com/in/shashi-prakash-aenugutala/' style={{textDecoration:"none"}}><LinkedinFilled className="Icons"/></a>
                <a href='mailto:shashiprakash1729@gmail.com' style={{textDecoration:"none"}}><MailFilled className="Icons"/></a>
                <a href='https://github.com/prakash204/' style={{textDecoration:"none"}}><GithubFilled className="Icons"/></a> 
            </div>
        </div>
    )
}