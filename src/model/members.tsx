import Image from 'next/image';
import Lucas from '@/assets/images/Foto Lucas Gabriel.jpg'

export const members = [
    {
        Name: "Sergio",
        MemberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nisi eu quam aliquam elementum. Pellentesque ultrices, est vitae pulvinar aliquam, diam lorem fermentum",
        MemberPicture: () => <Image src={Lucas} alt='Foto de Membro do Laboratorio' width={100} />/**foto do membro*/ 
    },
    {
        Name: "Fábio",
        MemberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nisi eu quam aliquam elementum. Pellentesque ultrices, est vitae pulvinar aliquam, diam lorem fermentum",
        MemberPicture: () => <Image src={Lucas} alt='Foto de Membro do Laboratorio' width={100}/>/**foto do membro*/ 
    },
    {
        Name: "Suzane",
        MemberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nisi eu quam aliquam elementum. Pellentesque ultrices, est vitae pulvinar aliquam, diam lorem fermentum",
        MemberPicture: () => <Image src={Lucas} alt='Foto de Membro do Laboratorio' width={100}/>/**foto do membro*/  
    },
    {
        Name: "Tavares",
        MemberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nisi eu quam aliquam elementum. Pellentesque ultrices, est vitae pulvinar aliquam, diam lorem fermentum",
        MemberPicture: () => <Image src={Lucas} alt='Foto de Membro do Laboratorio' width={100}/>/**foto do membro*/
    },
    {
        Name: "Garoto Dinamico",
        MemberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nisi eu quam aliquam elementum. Pellentesque ultrices, est vitae pulvinar aliquam, diam lorem fermentum",
        MemberPicture: () => <Image src={Lucas} alt='Foto de Membro do Laboratorio' width={100}/>/**foto do membro*/ 
    },
    {
        Name: "Mano Brian",
        MemberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nisi eu quam aliquam elementum. Pellentesque ultrices, est vitae pulvinar aliquam, diam lorem fermentum",
        MemberPicture: () => <Image src={Lucas} alt='Foto de Membro do Laboratorio' width={100}/>/**foto do membro*/
    },
]