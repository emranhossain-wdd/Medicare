import React from 'react';

const PrivateDetailsShared = props => {
    const { name } = props

    return (
        <div className="w-5/6 md:w-5/12 mx-auto tracking-wide text-lg font-medium text-gray-600 text-left my-6 space-y-4">
            <h1 className="text-4xl font-bold text-black">Why do you need a {name} ?</h1>
            <p>A Hospital is a place where the sick, injured and emergency case are taken for treatment. They are employed by the hospitals to nurse the sick back to heath.</p>
            <p className="border-l-4 border-blue-600 py-4 pl-4">The dedicated teams of doctors and nurses delivers the message of hope to their patients in the hospitals.</p>
            <p>In the nineteenth and the twenty century’s medical science made remarkable progress and the cures for almost all the diseases were found. Both in the spheres of medicine and surgery the prolonged researches were rewarded with epoch-making achievements.</p>
            <img src={"https://assets.website-files.com/5e31fbcb275ce1b6bb167cb4/5e560b1a6725fd7dfb2f3be9_why-us-image-medica-template-webflow-elements.jpg"} alt="" />
            <p>All over the world, hospitals are built to treat and cure thousands of the sick patients. As these hospitals, there are very well-equipped facilities and expert doctors. These hospitals are considered the best places for effective treatment.</p>
            <h3 className="text-2xl font-bold text-black">5 Signs to Find a Great {name}</h3>
            <p className="border-l-4 border-blue-600 py-4 pl-4">I was pretty happy about the surrounding there. It has been so developed and improved. The government hospital area was mostly dirty. But now there is a massive change. </p>
            <p>The types of hospitals in general are private hospitals and hospitals run by the government. Private hospitals basically are run by an individual or a group of physicians or by any private organization. Another kind of hospital prevails in India and it is the semi-government hospital that is run by both the government and the private organization.</p>
            <img src={"https://assets.website-files.com/5e31fbcb275ce1b6bb167cb4/5e560a8924830b494e09925e_about-us-image-medica-template-webflow-elements.jpg"} alt="" />
            <p>The doctors and nurses works effortlessly in doing their duties to the patients. The atmosphere in the hospitals should be pleasant so the the patient can feel comfortable.The doctor and nurses every effort for save life of patient.</p>
            <h1 className="text-4xl font-bold text-black">What to consider when choosing a {name}</h1>
            <p className="border-l-4 border-blue-600 py-4 pl-4">The doctors and nurses are readily available there for admitting and attending on their patients and nurses are very care fully.</p>
            <p>However, some hospital doesn’t provide the expected service to it’s patients. They neglect their duties toward the patients. This should not happen. The doctors should always treats their patients with utmost care, considering their lives very precious.</p>
        </div>
    );
};

export default PrivateDetailsShared;