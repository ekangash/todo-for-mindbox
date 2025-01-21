/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';
import {BadgeCheck} from "lucide-react";
/** 2 App - Components, Hooks */
import {Miniature} from "@/components/shared/miniature/Miniature";
import {Button} from "@/components/shared/button/Button";

/** 3 Entities, Stores, Packages, Enums ... */
import {Page} from "@/entities/notepad/Page";
import {str} from "@/packages/support";
import {type Profile} from "@/entities/account/Profile";

/**
 * @interface ArticleCardAuthorProps
 */
interface ArticleCardAuthorProps {
    entity: Page;
}

/**
 * @return {React.ReactNode} Сформированные DOM узлы.
 */
export const PageCardProfile: React.FC<ArticleCardAuthorProps> = ({ entity }): React.ReactElement|null => {

    return entity.relation<React.ReactElement|null>('profile', (profile: Profile) => (
        <div className="flex items-center space-x-1">
            <Miniature
                src={profile.attribute<string>('avatar')}
                size={6}
                feature="squircle"
                placeholder="blur"
            />
            <Button
                href={`/${profile.attribute('sign')}`}
                className="flex text-xs font-bold link-title straight flex-nowrap gap-1"
                variant="none"
                size="none"
            >
                {profile.attribute('confirmed_at', (confirmedAt) => str.contains(confirmedAt), () => false) && (
                    <BadgeCheck className="w-4 h-4 stroke-green-400 text-green-400 stroke-2"/>
                )}
                <span>{profile.attribute('fullname')}</span>
            </Button>
        </div>
    ));
};