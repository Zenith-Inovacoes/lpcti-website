import Image from 'next/image';
import Lucas from '@/assets/images/Foto Lucas Gabriel.jpg'

export const members = [
    {
        Name: "Gabriel  Marcelino",
        MemberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nisi eu quam aliquam elementum. Pellentesque ultrices, est vitae pulvinar aliquam, diam lorem fermentum",
        MemberPicture: () => <Image src={Lucas} alt='Foto de Membro do Laboratorio' />/**foto do membro*/ 
    },
    {
        Name: "Caique Mauricio",
        MemberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nisi eu quam aliquam elementum. Pellentesque ultrices, est vitae pulvinar aliquam, diam lorem fermentum",
        MemberPicture: () => <Image src={Lucas} alt='Foto de Membro do Laboratorio' />/**foto do membro*/ 
    },
    {
        Name: "João Renan",
        MemberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nisi eu quam aliquam elementum. Pellentesque ultrices, est vitae pulvinar aliquam, diam lorem fermentum",
        MemberPicture: () => <Image src={Lucas} alt='Foto de Membro do Laboratorio' />/**foto do membro*/  
    },
    {
        Name: "João Victor",
        MemberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nisi eu quam aliquam elementum. Pellentesque ultrices, est vitae pulvinar aliquam, diam lorem fermentum",
        MemberPicture: () => <Image src={Lucas} alt='Foto de Membro do Laboratorio' />/**foto do membro*/
    },
    {
        Name: "Matheus Tsuchiya",
        MemberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nisi eu quam aliquam elementum. Pellentesque ultrices, est vitae pulvinar aliquam, diam lorem fermentum",
        MemberPicture: () => <Image src={Lucas} alt='Foto de Membro do Laboratorio' />/**foto do membro*/ 
    },
    {
        Name: "Rian Ernesto",
        MemberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nisi eu quam aliquam elementum. Pellentesque ultrices, est vitae pulvinar aliquam, diam lorem fermentum",
        MemberPicture: () => <Image src={Lucas} alt='Foto de Membro do Laboratorio' />/**foto do membro*/
    },
    {
        Name: "Renan, Andrew",
        MemberDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nisi eu quam aliquam elementum. Pellentesque ultrices, est vitae pulvinar aliquam, diam lorem fermentum",
        MemberPicture: () => <Image src={Lucas} alt='Foto de Membro do Laboratorio' />/**foto do membro*/
    },
]