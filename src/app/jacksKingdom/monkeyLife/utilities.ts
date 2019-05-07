import { Sex, SocialStatus, Relation } from 'src/app/enums';

export function oneOf(items: any[]){
    return items[Math.floor(items.length * Math.random())];
}

export function generateName(sex: Sex): string {
    if (sex === Sex.Male) {
        return oneOf(["Grob","Bung","Chim","Dram","Bool","Luc"])
            +  oneOf(["lick","tar","blo","burt","man"]);
    }
    if (sex === Sex.Female) {
        return oneOf(["Fran","Bing","Gorl","Jess","Ball","Ass"])
            +  oneOf(["ia","ica","ietta","a","ette"]);
    }
}

export function generateFamily(){
    let family = [];
    
    family.push({
        name: generateName(Sex.Male),
        age: Math.floor(Math.random()*30 + 20),
        relation: Relation.Father,
        sex: Sex.Male,
        socialStatus: getSocialStatus()
    });

    family.push({
        name: generateName(Sex.Female),
        age: Math.floor(Math.random()*30 + 15),
        relation: Relation.Mother,
        sex: Sex.Female,
        socialStatus: family[0].socialStatus
    });

    family.push({
        name: generateName(Sex.Male),
        age: Math.floor(Math.random()*30),
        relation: Relation.Brother,
        sex: Sex.Male,
        socialStatus: family[0].socialStatus
    });

    family.push({
        name: generateName(Sex.Male),
        age: Math.floor(Math.random()*30),
        relation: Relation.Brother,
        sex: Sex.Male,
        socialStatus: family[0].socialStatus
    });

    return family;
}

export function getSocialStatus(): SocialStatus {
    return Math.floor(Math.random() * Object.keys(SocialStatus).length / 2.0);
}

export function getResponseToSocialStatus(answer: string, actualStatus: SocialStatus): string{
    let names = Object.values(SocialStatus).map((s:string) => {
        return (typeof s) == "string" ? s.toLowerCase() : s;
    });
    answer = answer.toLowerCase();

    if(answer === names[0]){//High
        if (actualStatus === SocialStatus.High) {
            return "You are good sir! Cheers! Nyuk huk huk huk huk";
        }
        else if (actualStatus === SocialStatus.Average) {
            return "Actually, you're just average. In other words SCUM";
        }
        else if (actualStatus === SocialStatus.Low) {
            return "The low class actually, unfit to shine the shoe of a high status monkey.";
        }
        else if (actualStatus === SocialStatus.Hated) {
            return "";
        }
    }
    else if(answer === names[1]){//Average
        if (actualStatus === SocialStatus.High) {
            return "Nope, sadly you are just an average monkey.";
        }
        else if (actualStatus === SocialStatus.Average) {
            return "Correct! Ho hum.";
        }
        else if (actualStatus === SocialStatus.Low) {
            return "The low class actually, unfit to shine the shoe of a high status monkey.";
        }
        else if (actualStatus === SocialStatus.Hated) {
            return "Actually, it turns out you're completely hated in society.";
        }
    }
    else if (answer === names[2]) {
        if (actualStatus === SocialStatus.High) {
            return "Nay! You are not low, you are a highly king!";
        }
        else if (actualStatus === SocialStatus.Average) {
            return "InCorrect! You are a loooow class monkey.";
        }
        else if (actualStatus === SocialStatus.Low) {
            return "The low class actually, unfit to shine the shoe of a high status monkey.";
        }
        else if (actualStatus === SocialStatus.Hated) {
            return "Actually, it turns out you're completely hated in society.";
        }
    }
    else if (answer === names[3]) {
        if (actualStatus === SocialStatus.High) {
            return "Fear not! For you are loved in society, a high class monkey. The true cream of the crop.";
        }
        else if (actualStatus === SocialStatus.Average) {
            return "Not hated! Just an average monkey.";
        }
        else if (actualStatus === SocialStatus.Low) {
            return "Not quite hated. but you are a lower class monkey.";
        }
        else if (actualStatus === SocialStatus.Hated) {
            return "Correct! Society hates you. Probably not as much as you hate yourself though.";
        }
    }
    else {
        return "What? What class is that?";
    }
}