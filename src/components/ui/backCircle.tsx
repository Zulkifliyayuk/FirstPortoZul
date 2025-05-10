import { SkillMotion } from './skillMotion';
import { SkillMotionBackground } from './skillMotionBackground';
import { adjustClamp } from '../layout/functions';

export const BackCircle = () => {
  return (
    <div
      className='relative mx-auto my-0 items-center justify-center'
      style={{
        width: adjustClamp(320, 587, 1208),
        height: adjustClamp(280.75, 515, 1208),
      }}
    >
      {/* background circle */}
      <div>
        <div className='center-center'>
          <SkillMotionBackground
            style={{
              width: adjustClamp(280.75, 515, 1208),
              height: adjustClamp(280.75, 515, 1208),
            }}
          />
        </div>
        <div className='center-center'>
          <SkillMotionBackground
            style={{
              width: adjustClamp(209.88, 385, 1208),
              height: adjustClamp(209.88, 385, 1208),
            }}
          />
        </div>
        <div className='center-center'>
          <SkillMotionBackground
            style={{
              width: adjustClamp(145, 266, 1208),
              height: adjustClamp(145, 266, 1208),
            }}
          />
        </div>
      </div>

      {/* mini items */}
      <div>
        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(280.75, 515, 1208),
              height: adjustClamp(280.75, 515, 1208),
            }}
            start={75}
          />
        </div>
        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(209.88, 385, 1208),
              height: adjustClamp(209.88, 385, 1208),
            }}
            start={0}
          />
        </div>
        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(145, 266, 1208),
              height: adjustClamp(145, 266, 1208),
            }}
            start={75}
          />
        </div>
        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(145, 266, 1208),
              height: adjustClamp(145, 266, 1208),
            }}
            start={20}
          />
        </div>
      </div>

      {/* Outer Circle */}
      <div>
        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(280.75, 515, 1208),
              height: adjustClamp(280.75, 515, 1208),
            }}
            start={0}
            img='/icons/skillCSS.png'
          />
        </div>
        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(280.75, 515, 1208),
              height: adjustClamp(280.75, 515, 1208),
            }}
            start={25}
            img='/icons/skillHTML.png'
          />
        </div>

        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(280.75, 515, 1208),
              height: adjustClamp(280.75, 515, 1208),
            }}
            start={50}
            img='/icons/skillJS.png'
          />
        </div>
      </div>

      {/* midle circle */}
      <div>
        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(209.88, 385, 1208),
              height: adjustClamp(209.88, 385, 1208),
            }}
            start={75}
            img='/icons/skillReact.png'
          />
        </div>
      </div>

      {/* inner circle */}
      <div>
        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(145, 266, 1208),
              height: adjustClamp(145, 266, 1208),
            }}
            start={50}
            img='/icons/skillFramer.png'
          />
        </div>
        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(145, 266, 1208),
              height: adjustClamp(145, 266, 1208),
            }}
            start={0}
            img='/icons/skillTypescript.png'
          />
        </div>
      </div>
    </div>
  );
};
