/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    branches: ["main"],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/npm",
            {
                "npmPublish": true
            }
        ],
        "@semantic-release/github",
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "CHANGELOG.md"
            }
        ],
        [
            "@semantic-release/git",
            {
                "assets": [
                    "package.json",
                    "CHANGELOG.md"
                ]
            }
        ],
    ],
};