import socials from '../../data/socials';

const Socials = (
  <>
    {socials.map((social) => (
      <div key={social.id}>
        <a href={social.link} target="_blank">
          {social.icon}
        </a>
      </div>
    ))}
  </>
);

export default Socials;
