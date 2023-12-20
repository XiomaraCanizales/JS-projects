const dangerArray = [
    ["🎅", "👺"],
    [
        ["🎅", "🦁"],
        ["👹", "🎅"]
    ],
    [
        [
            ["🎅", "🐻"],
            ["🧌", "🎅"]
        ],
        [
            ["🐯", "🎅"],
            ["🎅", "😈"]
        ]
    ]
]

function saveSanta(arr) {
    const findSanta = arr.flat(Infinity).filter(element => element === "🎅")
    return findSanta
}

// check results
console.log(saveSanta(dangerArray))