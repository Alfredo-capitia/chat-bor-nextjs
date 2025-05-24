import { useEffect } from "react";
import { socket } from "@/lib/Socket";

export const useSOcket = (
    onMessage: (msg: string) => void,
    onVoiceMessage: (data: { content: string; type: string }) => void
) => {
    useEffect(() => {
        socket.on("receive-message", onMessage);
        socket.on("voice-message", onVoiceMessage);

        return () => {
            socket.off("receive-message", onMessage);
            socket.off("voice-message", onVoiceMessage);
        };
    }, [onMessage, onVoiceMessage]);
    return socket;
}
