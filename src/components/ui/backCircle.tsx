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

      {/* items miniplanets */}
      <div>
        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(280.75, 515, 1208),
              height: adjustClamp(280.75, 515, 1208),
            }}
            start={50}
          />
        </div>
        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(280.75, 515, 1208),
              height: adjustClamp(280.75, 515, 1208),
            }}
            start={8}
          />
        </div>

        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(209.88, 385, 1208),
              height: adjustClamp(209.88, 385, 1208),
            }}
            start={25}
          />
        </div>
        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(209.88, 385, 1208),
              height: adjustClamp(209.88, 385, 1208),
            }}
            start={90}
          />
        </div>

        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(145, 266, 1208),
              height: adjustClamp(145, 266, 1208),
            }}
            start={80}
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
            start={16}
            img='/icons/skillHTML.png'
          />
        </div>
        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(280.75, 515, 1208),
              height: adjustClamp(280.75, 515, 1208),
            }}
            start={80}
            img='/icons/skillJS.png'
          />
        </div>

        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(280.75, 515, 1208),
              height: adjustClamp(280.75, 515, 1208),
            }}
            start={94}
            img='/icons/skillCSS.png'
          />
        </div>
      </div>

      {/* middle circle */}
      <div>
        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(209.88, 385, 1208),
              height: adjustClamp(209.88, 385, 1208),
            }}
            start={64}
            img='/icons/skillReact.png'
          />
        </div>
        <div className='center-center'>
          <SkillMotion
            style={{
              width: adjustClamp(209.88, 385, 1208),
              height: adjustClamp(209.88, 385, 1208),
            }}
            start={37}
            img='/icons/skillTypescript.png'
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
            start={16}
            img='/icons/skillFramer.png'
          />
        </div>
      </div>
    </div>
  );
};
