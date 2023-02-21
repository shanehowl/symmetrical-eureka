import { Button, Radio } from 'antd';
import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { _Temporary } from './constant';

const Message = JSON.parse(atob(_Temporary));

const App: FC = () => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08
      }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const [isPartOne, setIsPartOne] = useState(true);
  const [isPartTwo, setIsPartTwo] = useState(false);
  const [isPartThree, setIsPartThree] = useState(false);
  const [isPartFour, setIsPartFour] = useState(false);

  const onFirstClick = () => {
    setIsPartOne(false);
    setIsPartTwo(true);
  };

  const onRadioChange = () => {
    setIsPartTwo(false);
    setIsPartThree(true);
  };

  const onThirdClick = () => {
    setIsPartFour(true);
  };
  return (
    <div className='app'>
      <div className='app__header'>
        <motion.div
          className='header__box'
          animate={{
            scale: [1, 1.25, 1.25, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ['0%', '0%', '50%', '50%', '0%']
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </div>
      <div className='app__content'>
        {isPartOne && (
          <motion.h4 className='h3__content' variants={sentence} initial='hidden' animate='visible'>
            {Message.line1.split('').map((char: string, index: number) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <span className='h3__content--spacer'></span>
            {Message.line2.split('').map((char: string, index: number) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <span className='h3__content--spacer'></span>
            {Message.line3.split('').map((char: string, index: number) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <span className='h3__content--spacer'></span>
            {Message.line4.split('').map((char: string, index: number) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <span className='h3__content--spacer'></span>
            <motion.div variants={letter} className='h3__content__btn-container'>
              <Button type='primary' className='h3__content__btn-container--hi-cta' onClick={onFirstClick}>
                Say Hi
              </Button>
            </motion.div>
          </motion.h4>
        )}
        {isPartTwo && (
          <motion.h4 className='h3__content' variants={sentence} initial='hidden' animate='visible'>
            {Message.line5.split('').map((char: string, index: number) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <span className='h3__content--spacer'></span>
            {Message.line6.split('').map((char: string, index: number) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <span className='h3__content--spacer'></span>
            {Message.line7.split('').map((char: string, index: number) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <span className='h3__content--spacer'></span>
            <motion.div variants={letter} className='h3__content__btn-container'>
              <Radio.Group className='part-2__content--radio-group' onChange={onRadioChange}>
                <Radio value={1}>Cool</Radio>
                <Radio value={2}>Sexy</Radio>
                <Radio value={3}>IDK</Radio>
              </Radio.Group>
            </motion.div>
          </motion.h4>
        )}
        {isPartThree && (
          <motion.h4 className='h3__content' variants={sentence} initial='hidden' animate='visible'>
            {Message.line8.split('').map((char: string, index: number) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <span className='h3__content--spacer'></span>
            {Message.line9.split('').map((char: string, index: number) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <span className='h3__content--spacer'></span>
            {Message.line10.split('').map((char: string, index: number) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <span className='h3__content--spacer'></span>
            {Message.line11.split('').map((char: string, index: number) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <span className='h3__content--spacer'></span>
            {Message.line12.split('').map((char: string, index: number) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <span className='h3__content--spacer'></span>
            {Message.line13.split('').map((char: string, index: number) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <span className='h3__content--spacer'></span>
            <motion.div variants={letter} className='part-3__content__btn-container'>
              {!isPartFour && (
                <Button className='' onClick={onThirdClick}>
                  Yes
                </Button>
              )}
              <Button type='primary' className='h3__content__btn-container--hi-cta' onClick={onThirdClick}>
                Of course
              </Button>
            </motion.div>
          </motion.h4>
        )}
        {isPartFour && (
          <motion.h4 className='h3__content' variants={sentence} initial='hidden' animate='visible'>
            {Message.line14.split('').map((char: string, index: number) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <span className='h3__content--spacer'></span>
            {Message.line15.split('').map((char: string, index: number) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h4>
        )}
      </div>
    </div>
  );
};

export default App;
