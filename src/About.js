import {motion} from 'framer-motion';
import './About.css';
function About () {
    return (
        <>
            <motion.h1 initial={{ opacity: 0, x:"-10%" }}
                whileInView={{ opacity: 1, x: "-1%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 0.1}}>
                    Our Mission Statement:
            </motion.h1>
            <div className='mission_container'>
            <motion.h2 initial={{ opacity: 0, x:"-10%" }}
                whileInView={{ opacity: 1, x: "1.15%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 3.1}}>
                    Innovate.
            </motion.h2>
            <motion.h2 initial={{ opacity: 0, x:"10%" }}
                whileInView={{ opacity: 1, x: "1.15%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 4.1}}>
                    Improvise.
            </motion.h2>
            <motion.h2 initial={{ opacity: 0, x:"-10%" }}
                whileInView={{ opacity: 1, x: "1.15%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 5.1}}>
                    Think.
            </motion.h2>
            <motion.h2 initial={{ opacity: 0, x:"10%" }}
                whileInView={{ opacity: 1, x: "1.15%" }}
                viewport={{once: true, amount: 0.45}}
                transition={{duration: 1, delay: 6.1}}>
                    Overcome.
            </motion.h2>
            </div>
        </>
    );
}

export default About;