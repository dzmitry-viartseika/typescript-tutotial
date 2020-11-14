// вспомогательная сущность которая позволяет лучше структурировать код если много однотипных элементов

// 1)

enum Membership {
    Simple,
    Standart,
    Premium
}

enum SocialMedia {
    VK = 'vk',
    faceBook = 'faceBook',
    Instagram = 'Instagram',
}

const membership = Membership.Standart;
console.log(membership);

const membershipReverse = Membership[2];
console.log(membershipReverse);