//@ts-expect-error
const UpdateBalance = (balance: number) => {
    const element = document.getElementById("title")!;
    element.innerText = `Rewards - Current Balance: $${balance}`;
}

const PopulateCollectionview = (rewards: Reward[]) => {
    const collectionView = document.getElementById("rewards")!;

    collectionView.innerHTML = "";
    const section = document.createElement("div");
    section.className = "section";

    for (const [i, reward] of rewards.entries()) {
        const rewardElement = document.createElement("div")
        rewardElement.className = "cell clickable";

        const wrapper = document.createElement("div");
        wrapper.innerHTML = `
        <h2>${reward.name}</h3>
        <h1>$${reward.cost}</h2>
        `;
        rewardElement.append(wrapper);

        rewardElement.onclick = () => { ClaimReward(i); }

        section.append(rewardElement)
    }
    collectionView.append(section);

    if (rewards.length == 0) {
        collectionView.innerHTML = "<p>No rewards yet, add some to create incentives!<p>"
    }
}



const ClaimReward = (index: number) => {
    //deduct reward's cost from balance (check if balance >= cost first), and possible remove reward
    const reward = USER_DATA.rewards[index];
    const cost = reward.cost;

    if (USER_DATA.balance < cost) {
        alert(`You do not have sufficient funds to purchase '${reward.name}'. Complete a few tasks and earn $${reward.cost - USER_DATA.balance} more...`);
        return;
    }

    const confirm = window.confirm(`Are you sure you want to purchase '${reward.name}' for $${cost}?`);
    if (confirm == true) {
        USER_DATA.balance -= cost;

        SaveData(USER_DATA, USER_DATA_KEY);
        PopulateCollectionview(USER_DATA.rewards); //for now there shouldn't be any effect, as we aren't currently locking this reward off.
        UpdateBalance(USER_DATA.balance);

        alert(`Purchased '${reward.name}' for $${cost}; Enjoy the reward!`);
    }
}



const MainRewards = () => {
    //synchronise user data using setup
    SYNCHRONISE_USER_DATA(TODAY_DATE);
    SaveData(USER_DATA, USER_DATA_KEY);
    SaveData(SETUP, SETUP_KEY);

    console.log(SETUP);
    console.log(USER_DATA);
    console.log(HISTORY);

    //Display data
    UpdateBalance(USER_DATA.balance);
    PopulateCollectionview(USER_DATA.rewards);
}
MainRewards();