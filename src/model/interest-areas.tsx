import { UilTrees } from '@iconscout/react-unicons'
import { UilUniversity } from '@iconscout/react-unicons'
import { UilBusSchool } from '@iconscout/react-unicons'
import { UilChannel } from '@iconscout/react-unicons'
import { Button } from '@/components/Button'
import { useState } from 'react'

export const interestAreas = [
    {
        cardTitle: "Gerenciamento de Cidades Inteligentes",
        cardDesc: "Este é um aspecto crucial da cidade inteligente, envolvendo a implementação de tecnologias e soluções para melhorar a eficiência dos serviços públicos, incluindo transporte, iluminação pública, gerenciamento de resíduos, segurança cidadã, entre outros.",
        CardIcon: () => <UilChannel size='60px' color='white'/>,
        },
    {
        cardTitle: "Mobilidade Urbana",
        cardDesc: "A mobilidade é um dos desafios mais importantes das cidades modernas e a tecnologia inteligente pode ser utilizada para melhorar a experiência dos usuários e a eficiência do transporte, incluindo soluções como transporte autônomo, sistemas de informação para usuários de transporte e integração de diferentes modos de transporte.",
        CardIcon: () => <UilBusSchool size='60px' color='white'/>,
    },
    {
        cardTitle: "Sistemas educacionais inteligentes",
        cardDesc: "As tecnologias de inteligência artificial e machine learning podem ser usadas para desenvolver sistemas educacionais inteligentes que possam personalizar o aprendizado de cada aluno, oferecer feedback em tempo real e avaliar o progresso dos alunos de maneira mais precisa.",
        CardIcon: () => <UilUniversity size='60px' color='white'/>,
    },
    {
        cardTitle: "Sustentabilidade",
        cardDesc: "As cidades inteligentes buscam reduzir seu impacto ambiental através da implementação de soluções sustentáveis, como fontes de energia renováveis, eficiência energética, transporte verde, gerenciamento de resíduos e conservação de água.",
        CardIcon: () => <UilTrees size='60px' color='white'/>,
    },
]