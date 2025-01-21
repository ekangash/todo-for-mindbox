/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";

/** 2 App - Components, Hooks */
import {DocumentCard} from "@/components/widgets/documents/card/DocumentCard";
import {DocumentsDialogView} from "@/components/entities/documents/dialog/view/DocumentsDialogView";

/** 3 Entities, Stores, Packages, Enums ... */


const DOCUMENTS = [
    {
        title: 'Регрессивная гипнотерапия',
        description: 'Регрессивный гипноз – это мощный инструмент, который может помочь вам докопаться до корня проблемы и переработать ее.',
        preview: 'Цель метода - вывести подавленные эмоции в сознательное состояние, а затем высвободить их. Травмирующее событие может быть в этой жизни в более раннем периоде, или в одной из других прошлых жизней. Простыми словами, в сеансе вы будите путешествовать по ленте в прошлое, в прошлые жизни и в самого себя.',
        cover: '/img/why-chose-us-thumb.png',
    },
    {
        title: 'Регрессивная гипнотерапия с участием слипера/контактера',
        description: 'На протяжении всего сеанса с вами будет профессиональный слипер, обладающий специальными техниками для разблокировки вашего подсознания, которые гарантированно решают ваш запрос за 1 сеанс.',
        preview: 'На протяжении всего сеанса с вами будет профессиональный слипер, обладающий специальными техниками для разблокировки вашего подсознания, которые гарантированно решают ваш запрос за 1 сеанс.',
        cover: '/img/blog-thumb1-2.jpg',
    },
    {
        title: 'НЛП Техника',
        description: 'Нейролингвистическое программирование.Терапевтический метод психологии и техника для развития личности. Помогает решать разные задачи, от развития коммуникативных навыков до избавления от депрессией, фобий, страхов, зависимостей.',
        preview: '',
        cover: '/img/blog-thumb2-3.jpg',
    }
];

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const Documents: React.FC = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {DOCUMENTS.map((document, idx) => (
                <DocumentCard
                    key={idx}
                    cover={document.cover}
                    title={document.title}
                    description={document.description}
                >
                    <DocumentsDialogView
                        cover={document.cover}
                        title={document.title}
                        description={document.description}
                        preview={document.preview}
                    />
                </DocumentCard>
            ))}
        </div>
    );
}