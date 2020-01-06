import globalStyles from '../jss-styles/global';
import contactStyles from '../jss-styles/contact'
import CopyrightFooter from '../components/copyrightFooter';
import ContactForm from '../components/contactForm';


const Contact = () => {
    const globalClasses = globalStyles();
    const classes = contactStyles();
    return (<div id="contact" className={`${classes.contact}`}>
        <div className={globalClasses.sectionHeader}>
            <h2>Contact</h2>
        </div>
        <div className={classes.contactForm}>
            <ContactForm />
        </div>
        <CopyrightFooter />
    </div>)
};


export default Contact;