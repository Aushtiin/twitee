module.exports = class ServerResponse {
    static errorResponse(res, status, error) {
        return res.status(status).json({
            errors: error
        })
    }

    static successResponse({ res, status, success, message, data }) {
        return res.status(status).json({
            status,
            success,
            message,
            data
        })
    }
}