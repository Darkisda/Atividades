<h1 align="center">Quantum Archtecture</h1>

<blockquote>Conforme definido na física, o quantum é a quantidade mínima de qualquer entidade física envolvida em uma interação.Um quantum arquitetônico é um componente implantável independentemente com alta coesão funcional, que inclui todos os elementos estruturais necessários para o sistema funcionar corretamente.Em uma arquitetura monolítica, o quantum é toda a aplicação; tudo é altamente acoplado e, portanto, os desenvolvedores devem implantá-lo em massa.</blockquote>
<small><i>Building Evolutionary Architectures (Tradução livre)</i></small>

<br></br>

<h2>O que é?</h2>
<p>A arquitetura quântica, tráta-se do aclopamento e coesão entre classes. O quão um classe pode depender de outra, no seu grau de <i>granularidade</i>. Quando isso acontece, temos um <i>quantum</i>, classes relacionadas e que dependem de si, ou melhor dizendo, um módulo.</p>

<figure>
<img src=".github\evar_0402.png" width="350px" align="center"></img>
<figcaption><i>A relação entre módulos, componentes e quanta</i></figcaption>
</figure>

<p>Uma arquitetura quântica bem aplicada, determina o quão estável será seu código, como também a escalabilidade que ele terá.</p>

<h2>Grande bola de lama</h2>
<p>Considere o caso degenerado de um sistema caótico sem arquitetura discernível, coloquialmente conhecido como o antipadrão Big Ball of Mud . Embora elementos arquitetônicos típicos, como frameworks e bibliotecas possam existir, os desenvolvedores não construíram uma estrutura de propósito.Esses sistemas são altamente acoplados, levando a efeitos colaterais de ondulação quando ocorrem mudanças. Os desenvolvedores criaram classes altamente acopladas com modularidade pobre. Os esquemas de banco de dados invadiram a IU e outras partes do sistema, isolando-os efetivamente contra alterações. Os DBAs passaram a última década evitando a refatoração juntando tabelas de junção fortemente vinculadas. Provavelmente impulsionado por restrições orçamentárias draconianas, as operações amontoam tantos sistemas quanto possível e lidam com o acoplamento operacional.</p>
<figure>
<img src=".github\evar_0403.png" width="350px" align="center"></img>
<figcaption><i>Cada nó representa uma classe, as linhas representam</br> aclopamentos e o negrito delas o número de conexões</i></figcaption>
</figure>
<p>Alterar qualquer parte do aplicativo representado na (tirado de um projeto real) apresenta desafios intensos. Como existe tanto acoplamento exuberante entre as classes, é virtualmente impossível modificar uma parte do aplicativo sem impactar outras partes. Portanto, do ponto de vista da capacidade de evolução, essa arquitetura tem pontuação extremamente baixa. Os desenvolvedores que precisam alterar o acesso aos dados em todo o aplicativo devem caçar todos os locais em que existem e alterá-los, correndo o risco de perder alguns locais.
</p>
