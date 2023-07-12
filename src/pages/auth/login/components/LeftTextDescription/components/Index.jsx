import logo from '../../../assets/img/LogoMDP.png'
import { SubTexTitle } from './TextSubtittle/TextSubtittle';
import { TexTitle } from './TextTIttle/TextTtitle';

export const LefTextDescription = () => {

    return (
        <>
            <img src={logo} className="mb-2 logo" alt="Logo" />
            <TexTitle title={'Sistema de Planillas de MDP'} />
            <SubTexTitle subtitle={'  Un entorno donde valoramos y potenciamos el talento de nuestros colaboradores'}/>
        </>
    );
}