/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';

/** 2 App - Components, Hooks */
import {Card} from "@/components/feature/card/Card";
import {Button} from "@/components/shared/button/Button";

/** 3 Entities, Stores, Packages, Enums ... */
import {Page} from "@/entities/notepad/Page";
import {Channel} from "@/entities/notepad/Channel";

/**
 * @interface ArticleChannelProps
 */
interface ArticleChannelProps {
    entity: Page;
}

/**
 * @return {React.ReactNode} Сформированные DOM узлы.
 */
export const PageCardChannel: React.FC<ArticleChannelProps> = ({ entity }) => {

    return entity.relation('channel', (channel: Channel) => (
        <Button
            href={`/channels/${channel.attribute('sign')}`}
        >
            <Card
                title={channel.attribute('nickname')}
                description={`Канал @${channel.attribute('sign')}`}
            >
                <Card.Miniature
                    src={channel.attribute('logo')}
                />
            </Card>
        </Button>
    ));
};